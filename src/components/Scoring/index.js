import React, { Fragment, useMemo, useState } from 'react';
import styles from './Scoring.module.css';
import clsx from 'clsx';

const map = {
  'Results': '🏆 Results',
  'Direction': '⭐ Direction',
  'Talent': '🌲 Talent',
  'Culture': '🌈 Culture',
  'Craft': '🦉 Craft'
}

const ratings = {
  '👎': '-2',
  '✋': '-1',
  '👍': '0',
  '💪': '1',
  '🙌': '2'
}

const Selector = ({options, setOption, selectedOption}) => {
  return (
    <div className={styles.selector}>
      {options.map((option, idx) => <div onClick={() => setOption(option.value)} className={clsx(styles.option, selectedOption === option.value && styles.selected)} key={`option_${idx}`}>
        {option.text}
      </div>)}
    </div>
  )
}


const RAG = ({score, children}) => {
  const className = useMemo(() => {
    switch(parseInt(score)) {
      case -2:
        return styles.poor;
      case -1:
        return styles.issues;
      case 1:
        return styles.great;
      case 2:
        return styles.levelUp
      default:
        return styles.fine;
    }
  }, [score]);
  return (
    <span className={className}>{children}</span>
  )
}

export default function Scoring({content}) {
  const [open, setOpen] = useState(false);
  const [topic, setTopic] = useState(undefined);
  const [scores, setScores] = useState(undefined);
  const [finished, setFinished] = useState(false);
  const start = () => {
    setOpen(true);
    setFinished(false);
    setTopic({
      top: 'Results',
      bottom: Object.keys(content['Results'])[0]
    });
    setScores({});
  }
  const end = () => {
    setOpen(false);
  }
  const setSelected = (value) => {
    setScores((current) => ({...current, [`${topic.top}/${topic.bottom}`]: value}))
  }
  const next = () => {
    const top = topic.top;
    const topicKeys = Object.keys(content[top])
    const bottomIndex = topicKeys.indexOf(topic.bottom);
    if(bottomIndex + 1 > topicKeys.length - 1) {
      const topIndex = Object.keys(content).indexOf(top);
      const nextTop = Object.keys(content)[topIndex + 1]
      if(nextTop === undefined) {
        setFinished(true);
      } else {
        setTopic({
          top: nextTop,
          bottom: Object.keys(content[nextTop])[0]
        })
      }
    } else {
      setTopic({
        top,
        bottom: topicKeys[bottomIndex+1]
      })
    }
  }
  const finalScores = useMemo(() => {
    if(scores) {
      return Object.keys(map).map((key) => ({
        name: key,
        scores: Object.keys(scores).filter((scoreKey) => {
          return scoreKey.includes(`${key}/`)
        }).map((key) => ({value: parseInt(scores[key]), key}))
      }))
    }
  }, [scores])
  const summary = useMemo(() => {
    if(finalScores) {
      const averageScores = finalScores.map((score) => Math.floor(score.scores.reduce((p, s) => p+s.value, 0)/score.scores.length));
      const sum = Math.floor(averageScores.reduce((p, s) => p+s, 0))
      const totalAverage = Math.floor(sum/averageScores.length);
      let adorn;
      switch(totalAverage) {
        case -2:
          return 'There is a considerable amount of work to do to get up to standard';
        case -1:
          if(sum < -3) {
            return `There is a lot to improve on to get up to par. Make sure you set some plans for easy wins`
          }
          return `You're really close to being where we need you, check above for the areas you should look to improve`
        case 0:
          adorn = 'If you did want to level up consider making some of the above scores blue'
          if(sum > 1) {
            adorn = `Continue to make progress on the blue areas, or look to pull more into the blue!`
          }
          return `You are bang on par for your job - this is great. ${adorn}`;
        case 1:
          return `You're showing a lot more than your role is responsible for, continue to progress your blue areas and we should look at a more appropriate role!`;
        case 2:
          return `Book in a chat with your manager, it's time to look at roles that match the impact and resposibility you are driving to the company`
      }
    }
  }, [finalScores])
  return (
    <Fragment>
      <div className={clsx(styles.modal, open && styles.open)}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Scorecard<br />
              <h4>{topic?.top} > {topic?.bottom}</h4>
            </h2>
            <div className={styles.leftButton}>
              <div onClick={end} className={'button button--secondary'}>Close</div>
            </div>
          </div>
          {finished ? (
            <div className={styles.middle}>
              <h4>Your Scores</h4>
              <table style={{width: '100%'}}>
                <thead>
                  <th>Responsibility</th>
                  <th style={{width: '100%'}}>Score</th>
                </thead>
                <tbody>
                  {finalScores.map((score) => {
                    const sectionScore = Math.floor(score.scores.reduce((p, s) => p+s.value, 0)/score.scores.length);
                    return (
                      <tr key={`score_${score.name}`}>
                        <td>{map[score.name]}</td>
                        <td style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '-1px 0 -1px -1px'}}>
                          <div style={{padding: '10px 0', textAlign: 'center'}}>
                            <h3 style={{margin: 0}}><RAG score={sectionScore}>{sectionScore}</RAG></h3>
                          </div>
                          <div style={{display: 'flex'}}>
                            {score.scores.map((s) => <div style={{margin: '0 5px'}} key={`value_${s.key}`}><RAG score={s.value}>{s.key.split('/')[1]}: {s.value}</RAG></div>)}
                          </div>
                        </td>
                      </tr>
                    )
                  }
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={2} style={{textAlign: 'center'}}><b>{summary}</b></td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{padding: 0, width: '100%'}}>
                      <table style={{padding: 0, margin: '-1px', width: 'calc(100% + 2px)'}}>
                        <thead style={{width: '100%'}}>
                          <tr style={{width: '100%'}}>
                            <th colSpan={5} style={{width: '100%'}}>Copy the scores below to your own record!</th>
                          </tr>
                        </thead>
                        <tbody style={{width: '100%'}}>
                          <tr style={{width: '100%'}}>
                            {finalScores.map((score) => <td style={{width: '20%'}}>{Math.floor(score.scores.reduce((p, s) => p+s.value, 0)/score.scores.length)}</td>)}
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          ) : (
            <div className={styles.middle}>
              <h4>Which of the following best describes you:</h4>
              {topic?.top && topic?.bottom && (
                <Selector setOption={setSelected} selectedOption={scores[`${topic.top}/${topic.bottom}`]} options={Object.keys(content[topic.top][topic.bottom]).map((value) => ({text: content[topic.top][topic.bottom][value], value})).sort((a, b) => parseInt(a.value) - parseInt(b.value))} />
              )}
            </div>
          )}
          <div className={styles.footer}>
            <div></div>
            <div className={styles.leftButton}>
              <div onClick={next} className={clsx('button button--primary', scores && scores[`${topic?.top}/${topic?.bottom}`] === undefined && 'disabled')}>Next</div>
            </div>
          </div>
        </div>
      </div>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th style={{textAlign: 'left'}}>Responsibility</th>
            <th style={{textAlign: 'left', width: '100%', 'position': 'relative'}}>
              Behaviours
              <div style={{right: '10px', top: '0px', bottom: '0px', 'position': 'absolute', display: 'flex', alignItems: 'center'}}>
                <div onClick={start} className={'button button--primary'}>Check</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(map).map((key) => {
            return (<tr key={`row_${key}`}>
              <td>{map[key]}</td>
              <td style={{padding: 0}}>
                <table style={{padding: 0, margin: '-1px', width: 'calc(100% + 2px)'}}>
                  <tbody>
                    {Object.keys(ratings).map((rating, idx) => <tr key={`rating_${key}_${idx}`}>
                      <td>{rating}</td>
                      <td style={{'width': '100%'}}>
                        <ul>
                          {Object.keys(content[key]).filter((contentKey) => content[key][contentKey][ratings[rating]] !== undefined).map((contentKey, jdx) => <li key={`rating_${key}_${idx}_${jdx}`}>{content[key][contentKey][ratings[rating]]}</li>)}
                        </ul>
                      </td>
                    </tr>)}
                  </tbody>
                </table>
              </td>
            </tr>)
          })}
        </tbody>
      </table>
    </Fragment>
  )
}
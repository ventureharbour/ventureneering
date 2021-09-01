import React from 'react';
import Markdown from '../Markdown';

export default function Reach({ownership, reach, levers}) {
  return (
    <table style={{width: '100%'}}>
      <thead>
        <tr>
          <th style={{textAlign: 'left', width: '33%'}}><b>Scope</b><br /><em>Area of ownership and level of autonomy / ambiguity</em></th>
          <th style={{textAlign: 'left', width: '33%'}}><b>Collaborative Reach</b><br /><em>Organizational reach and extent of influence</em></th>
          <th style={{textAlign: 'left', width: '33%'}}><b>Impact Levers</b><br /><em>Technical levers typically exercised to achieve business impact</em></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <ul>
              {ownership.map((o, idx) => <li key={`ownership_${idx}`}><Markdown text={o} /></li>)}
            </ul>
          </td>
          <td>
            <ul>
              {reach.map((o, idx) => <li key={`ownership_${idx}`}><Markdown text={o} /></li>)}
            </ul>
          </td>
          <td>
            <ul>
              {levers.map((o, idx) => <li key={`ownership_${idx}`}><Markdown text={o} /></li>)}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
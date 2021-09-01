import React from 'react';
import Markdown from '../Markdown';

export default function Responsibilities({content}) {
  return (
    <table style={{width: '100%'}}>
      <thead>
        <tr>
          <th style={{textAlign: 'left'}}>Responsibility</th>
          <th style={{textAlign: 'left', width: '100%'}}>Behaviours</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(content).map((key, idx) => <tr key={`row_${idx}`}>
          <td>{key}</td>
          <td>
            <ul>
              {content[key].map((r, jdx) => <li key={`li_${idx}_${jdx}`}><Markdown text={r} /></li>)}
            </ul>
          </td>
        </tr>)}
      </tbody>
    </table>
  )
}
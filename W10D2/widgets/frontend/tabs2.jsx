import React, { useState } from "react";

export default function Tabs() {
  const [tabIdx, setTabIdx] = useState(0);

  const tabs = [
    { title: "one", content: "tab 1" },
    { title: "two", content: "tab 2" },
    { title: "three", content: "tab 3" },
  ]

  const tab = tabs[tabIdx];

  const headers = tabs.map((tab, i) => (
    <li
      key={i}
      className={i === tabIdx ? 'active' : 'nonactive'}
      onClick={() => setTabIdx(i)}>
      {tab.title}
    </li>
  ))

  return (
    <div className="tabs-container">
      <h1>Tabs</h1>
      <div className='tabs'>
        <div className="tab-header">
          {headers}
        </div>
        <div className='tab-content'>
          {tab.content}
        </div>
      </div>
    </div>
  );
}
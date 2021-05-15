import React from "react";

const TABS = [
  { title: "one", content: "tab 1" },
  { title: "two", content: "tab 2" },
  { title: "three", content: "tab 3" },
]

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIdx: 0
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(num) {
    this.setState({ tabIdx: num });
  }

  render() {
    const { tabIdx } = this.state;
    const tab = TABS[tabIdx];

    const headers = TABS.map((tab, i) => (
      <li
        key={i}
        className={i === tabIdx ? 'active' : 'nonactive'}
        onClick={() => this.handleTabClick(i)}>
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
}

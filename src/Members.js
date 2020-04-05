import React from 'react';
import './Members.css';

const Member = (props) => {

  const { sex, name, job, company } = props.details;

  const photoId = Math.floor(Math.random()*100+1);                // losowanie zdjecia
  const url = `https://randomuser.me/api/portraits/${sex==='m'?'men':'women'}/${photoId}.jpg`;
  
  return (
    <div className="idcard">
      <div className="top">
        <img className="photo" src={url} alt="face" />
      </div>
      <div className="bottom">
        <div className="name">{name}</div>
        <div className="job">{job}</div>
        <div className="company">{company}</div>
      </div>
    </div>
  );  

};

const MemberList = () => {
  const members = [
    {
      sex: 'm',
      name: 'Marek Kostro',
      company: 'Imagine',
      job: 'programista'
    }, 
    {
      sex: 'k',
      name: 'Kasia Baranek',
      company: 'Imagine',
      job: 'księgowa'
    }, 
    {
      sex: 'm',
      name: 'Jan Sokół',
      company: 'Effort Inc.',
      job: 'trener'
    }
  ];

  var renderData = [];

  for(var i = 0; i < members.length; i++) {
    let member = members[i];
    renderData.push(<Member key={i} details={member} />);
  }

  return renderData;

};

const Members = () => (
  <div className="container">
    <MemberList />
  </div>
);

export default Members;

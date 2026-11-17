import { Profile } from './Profile.jsx';

export function Card({ id, name, job, img }) {
  return <div className='card' key={id}>
    <Profile img={img}/>
    <h1 className='title'>Hello my name is
      <p>{name}</p>
    </h1>
    <p>job: {job}</p>
    <button className='btn'>View Profile</button>
  </div>;
}

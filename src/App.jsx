import './App.css';
import { Card } from './components/Card';
import { Navbar } from './components/Navbar';
const users = [{ name: 'roshan', img: 'https://images.unsplash.com/photo-1792278584659-70a23ea15892?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', job: 'server handling' }, { name: 'anant', job: 'player' }, { name: 'kisan', job: 'influencer' }];
export function App() {
  return <>
    <div id="header">header</div>
    <div id='components'>
      <Navbar />
      <div id='cards'>
        {users.map((user, id) => Card({ id, ...user })
        )}
      </div>
    </div>
  </>;
}

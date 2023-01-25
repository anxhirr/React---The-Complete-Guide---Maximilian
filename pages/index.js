import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: ' A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Stanford_Memorial_Church_October_2019_HDR.jpg',
    address: 'Some address 1, 123456 Some City',
    description: 'This is first meetup!',
  },
  {
    id: 'm2',
    title: ' A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Stanford_Memorial_Church_October_2019_HDR.jpg',
    address: 'Some address 1, 123456 Some City',
    description: 'This is second meetup!',
  },
  {
    id: 'm3',
    title: ' A Third Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/bc/Stanford_Memorial_Church_October_2019_HDR.jpg',
    address: 'Some address 1, 123456 Some City',
    description: 'This is third meetup!',
  },
]

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />
}
export default HomePage

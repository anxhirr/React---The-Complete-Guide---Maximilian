import NewMeetUpForm from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {

  const handleAddMeetup = (enteredMeetupData) => {
    console.log(enteredMeetupData)
  }
  return (
    <NewMeetUpForm onAddMeetup={handleAddMeetup} />
  )
}
export default NewMeetupPage
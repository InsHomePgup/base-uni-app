import MinRequest from '../../MinRequest'
const minRequest = new MinRequest()

const apis = {
	add (data) {
	  return minRequest.post('/addExercise', data)
	}
}

export default apis
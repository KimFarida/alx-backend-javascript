import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export function handleProfileSignup(firstName, lastName, fileName) {
  const promise = [signUpUser(firstName, lastName), uploadPhoto(fileName)]
  return Promise.all(promise)
    .then(values => {
      return values.map(value => {
        return {
          status: 'fulfilled',
          value: value
        }
      })
    })
    .catch(errors => {
      return errors.map(error => {
        return {
          status: 'rejected',
          value: error
        }
      })
    });
  }
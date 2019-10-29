import axios from 'axios'

const handleInsertIntoFavorites = (id, handleOpen, setLiked) => {
  let tea = {
    tea: id
  }
  const csrfToken = document.querySelector('[name="csrf-token"]').content;
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

  axios.post('/teas', tea).then((response) => {
    if (response.data === "") {
      handleOpen();
    } else {
      console.log(response)
      setLiked(response.data)

    }
  });
}

export default handleInsertIntoFavorites
const pool = new require('../../db');


module.exports = {

  getStories : (request, response) => {
    pool.query('SELECT * FROM stories ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  },

  getStoryById : (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM stories WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  },

  createStory : (request, response) => {
    const { title, body } = request.body

    pool.query('INSERT INTO stories (title, body) VALUES ($1, $2)', [title, body], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`Story added with ID: ${results.insertId}`)
    })
  },

  updateStory : (request, response) => {
    const id = parseInt(request.params.id)
    const { title, body } = request.body

    pool.query(
      'UPDATE stories SET title = $1, body = $2 WHERE id = $3',
      [title, body, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Story modified with ID: ${id}`)
      }
    )
  },

  deleteStory : (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM stories WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Story deleted with ID: ${id}`)
    })
  },

}
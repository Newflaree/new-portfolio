const { request, response } = require( 'express' );

const getUsers = ( req = request, res = response  ) => {
  res.status( 200 ).json({
    ok: true,
    msg: 'Get Usuarios'
  });
}

const postUsers = ( req = request, res = response  ) => {
  res.status( 201 ).json({
    ok: true,
    msg: 'Post Usuario'
  });
}

const putUsers = ( req = request, res = response  ) => {
  res.status( 200 ).json({
    ok: true,
    msg: 'Put Usuario'
  });
}

const deleteUsers = ( req = request, res = response  ) => {
  res.status( 200 ).json({
    ok: true,
    msg: 'Delete Usuario'
  });
}

module.exports = {
  getUsers,
  postUsers,
  putUsers,
  deleteUsers
}

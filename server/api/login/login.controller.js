/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/login              ->  index
 * POST    /api/login              ->  create
 * GET     /api/login/:id          ->  show
 * PUT     /api/login/:id          ->  update
 * DELETE  /api/login/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import request from 'request';
import config from '../../config/environment';

console.log(config)
export function login(req, res){
  const options = {
    url: `${config.OAUTH_SERVER}${config.OAUTH_ENDPOINT}`,
    auth: {
      user: config.OAUTH_CLIENT_ID,
      pass: config.OAUTH_SECRET_SECRET,
    },
    form: {
      grant_type: 'authorization_code',
      redirect_uri: `${config.OAUTH_REDIRECT_URI}`,
      code: req.body.code,
    },
  };
  request.post(options, function handleRes(err, apires, body) {
    if (err) return res.status(500).send(err);
    return res.status(apires.statusCode).send(body);
  });
}

export function refresh(req, res){
  const options = {
    url: `${config.OAUTH_SERVER}${config.OAUTH_ENDPOINT}`,
    auth: {
      user: config.OAUTH_CLIENT_ID,
      pass: config.OAUTH_SECRET_SECRET,
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: req.body.refresh_token,
    },
  };

  request.post(options, function handleRes(err, apires, body) {
    if (err) return res.status(500).send(err);
    return res.status(apires.statusCode).send(body);
  });
}

export function logout(req, res){
  const options = {
    url: `${config.OAUTH_SERVER}${config.OAUTH_ENDPOINT}/${req.body.access_token}`,
    auth: {
      user: config.OAUTH_CLIENT_ID,
      pass: config.OAUTH_SECRET_SECRET,
    },
  };

  request.del(options, function handleRes(err, apires, body) {
    if (err) return res.status(500).send(err);
    return res.status(apires.statusCode).send(body);
  });
}

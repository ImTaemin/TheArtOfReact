import Router from 'koa-router';
import auth from './auth/index.js';
import posts from './posts/index.js';

const api = new Router();
api.use('/posts', posts.routes());
api.use('/auth', auth.routes());

// 라우터를 내보낸다.
export default api;

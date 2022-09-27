import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl.js';
import checkLoggedIn from '../../lib/checkLoggedIn.js'

const posts = new Router();
posts.get('/', postsCtrl.list);
posts.post('/', checkLoggedIn, postsCtrl.write);
// posts.get('/:id', postsCtrl.read);
// posts.delete('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
// posts.patch('/:id', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

// 리팩토링 후 (불편하면 안써도 됨)
const post = new Router(); // /api/posts/:id
post.get('/', postsCtrl.read);
post.delete('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch('/', checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);
posts.use('/:id', postsCtrl.getPostById, post.routes());

export default posts;
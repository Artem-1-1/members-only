import db from "../db/queries.js";
import moment from "moment";

async function homepage(req, res, next) {
    try {
        const posts = await db.getAllPosts();

        if (posts.length > 0) {
            res.locals.posts = posts.map(e => ({
                ...e,
                date: moment(e.date).fromNow(),
            }));
        } else {
            res.locals.posts = posts;
        }

        res.render("index", { title: "Members Only" });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

export default { homepage };
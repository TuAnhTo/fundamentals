"use strict";
exports.__esModule = true;
require("./scss/styles.scss");
/**
 * Variable and Data type
 */
// tslint:disable
/**
 * var vs let/const
 */
// function main() {
//   console.log("START");
//   if (true) {
//     var lang = "vi";
//     let target = "en-us";
//     console.log("inside block");
//     console.log(target);
//   }
//   console.log(lang);
//   console.log(target);
//
/*
 * Data types
 */
function main() {
    var message;
    var total = 100;
    var isProduction = true;
    var prices = [120, 88, 60];
    var languages = ['vi', 'en-us'];
    var now = new Date();
    var unknown;
    var Direction;
    (function (Direction) {
        Direction[Direction["UP"] = 0] = "UP";
        Direction[Direction["DOWN"] = 1] = "DOWN";
        Direction[Direction["LEFT"] = 2] = "LEFT";
        Direction[Direction["RIGHT"] = 3] = "RIGHT";
    })(Direction || (Direction = {}));
    ;
    function log(msg) {
        console.log(msg);
    }
    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    var post = { id: "id", title: "title"
    };
    message = "50";
    function getPost(postId) {
        // do something to retrieve post
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            extra: 'data'
        };
    }
}
// function main() {}
// tslint:enable
main();

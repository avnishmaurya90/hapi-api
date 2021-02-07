'use strict';

const baseUrl = async (request, h) => {
    // return h.file('./public/hello.html');
    return h.view('index');
}

const baseUrlWithName = async (request, h) => {
    return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
}

const postAndPutRequest = async (request, h) => {
    return 'I did something!';
}

const loadImage = async (request, h) => {
    return h.file('./public/images/github.png');
}

exports.baseUrl = baseUrl;
exports.baseUrlWithName = baseUrlWithName;
exports.postAndPutRequest = postAndPutRequest;
exports.loadImage = loadImage;
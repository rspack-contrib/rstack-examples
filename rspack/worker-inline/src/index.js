import Worker from './worker.js';

const worker = new Worker();

let result;

worker.onmessage = function (event) {
  if (!result) {
    result = document.createElement('div');
    result.setAttribute('id', 'result');

    document.body.append(result);
  }

  result.innerText = JSON.stringify(event.data);
};

worker.postMessage({ postMessage: true });

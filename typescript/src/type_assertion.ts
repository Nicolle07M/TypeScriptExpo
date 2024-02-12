// Type Assertion

let channel : any = 'Discovery';

let channelStr = channel as string;

//let channelStr = <string>channel;

//const myCanvas = document.getElementById('main') as HTMLCanvasElement;

const myCanvas = <HTMLCanvasElement>document.getElementById('main');

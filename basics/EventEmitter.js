/**
 * mimic event emitter in nodejs
 */
class EventEmitter {
    constructor() {
        this.events = [];
    }
    subscribe(eventName, callback) {
        this.events[eventName] = callback;
    }

    emit(eventName, args) {
        const cb = this.events[eventName];
        cb();
    }
}

let eventEmitter = new EventEmitter();
eventEmitter.subscribe('x', () => {
    console.log('x called');
});

eventEmitter.emit('x');

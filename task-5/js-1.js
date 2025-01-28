const observable = {
    observers: [],
    state: null,
    
    subscribe(fn) {
        this.observers.push(fn);
    },
        unsubscribe(fn) {
        this.observers = this.observers.filter(observer => observer !== fn);
    },
    
    notify() {
        this.observers.forEach(observer => observer(this.state));
    },
    
    setState(data) {
        this.state = data;
        this.notify();
    }
};


function observer1(data) {
    console.log('Observer 1 received:', data);
}

function observer2(data) {
    console.log('Observer 2 received:', data);
}

observable.subscribe(observer1);
observable.subscribe(observer2);
observable.setState('Hello World');
observable.unsubscribe(observer1);
observable.setState('Hello Again');
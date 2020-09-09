import { ReplaySubject } from "rxjs";

export class PubSub {
    constructor() {
        this.topics = {};
    }

    dispatch(topic, update) {
        this.ensureTopic(topic);
        this.topics[topic].next(update);
    }

    subscribe(topic) {
        this.ensureTopic(topic);
        return this.topics[topic];
    }

    ensureTopic(topic) { 
        if (!this.topics[topic]) {
            this.topics[topic] = new ReplaySubject();
        }
    }
}

export const pubsub = new PubSub();

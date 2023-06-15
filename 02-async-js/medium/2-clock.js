class Clock {
    #time;
    #intervalPointer;

    #initializeTime() {
        this.#time = new Date();
    }

    #getHourMinuteSec() {
        this.#initializeTime();
        const currentHour = this.#time.getHours();
        const currentMinute = this.#time.getHours();
        const currentSeconds = this.#time.getSeconds();

        return {
            currentHour, currentMinute, currentSeconds
        }
    }

    get12HourFormatTime() {
        const {currentHour, currentMinute, currentSeconds} = this.#getHourMinuteSec();
        console.log(`${(currentHour % 13) + 1}:${currentMinute}::${currentSeconds} ${(currentHour < 12 ? 'AM': 'PM')}`);
    }

    get24HourFormatTime() {
        const {currentHour, currentMinute, currentSeconds} = this.#getHourMinuteSec();
        console.log(`${currentHour}:${currentMinute}::${currentSeconds}`);
    }

    start() {
        this.#intervalPointer = setInterval(() => {
            console.clear();
            this.get24HourFormatTime.bind(this)();
            this.get12HourFormatTime.bind(this)();
        }, 1000)
    }
}

const clock = new Clock();
clock.start();
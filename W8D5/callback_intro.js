class Clock {
  constructor() {
    // 1. Create a Date object.
    let currentTime = new Date();

    // 2. Store the hours, minutes, and seconds.
    this.time = [currentTime.getHours(), currentTime.getMinutes(), currentTime.getSeconds()];

    // 3. Call printTime.
    this.printTime();

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);

  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(this.time.join(':'));
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    if (this.time[2] === 59) {
      this.time[2] = 0;
      if (this.time[1] === 59) {
        this.time[1] = 0;
        if (this.time[0] === 23) {
          this.time[0] = 0;
        } else {
          this.time[0]++;
        }
      } else {
        this.time[1]++;
      }
    } else {
      this.time[2]++;
    }
      console.clear();
      this.printTime();
  }
}

const myClock = new Clock();
myClock._tick();
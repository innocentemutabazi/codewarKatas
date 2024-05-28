function humanReadable(seconds) {
    let time = {
        second: 0,
        minutes: 0,
        hour: 0
    }

    while (seconds > 60 ) {
        if (seconds >= 60 && seconds < 3600) {
            time.minutes =Math.floor( seconds / 60)
            seconds = seconds % 60

        }
        if (seconds >= 3600) {
            time.hour = Math.floor(seconds / 3600)
            seconds = seconds % 3600
        }
        console.log(seconds)

    }
    if (seconds<60) time.second = seconds
    for (key in time){
        if (time[key].toString().length===1){
          time[key] = time[key].toString().split()
          time[key].unshift('0')
          time[key] = time[key].join``
          console.log(time[key])
        }
    }

 console.log(time)

    return `${time.hour}:${time.minutes}:${time.second}`;
}
console.log(humanReadable(3599))
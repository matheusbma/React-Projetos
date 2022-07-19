import { useState } from 'react';
import { PlayIcon } from './assets/play';
import { PauseIcon } from './assets/pause';
import { ResetIcon } from './assets/reset';

function App() {

  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  var [totalTime, setTotalTime] = useState(0);

  const handleOnChangeHours = (e: any) => {
    setHours(e.target.value)
  }

  const handleOnChangeMinutes = (e: any) => {
    setMinutes(e.target.value)
  }

  const handleOnChangeSeconds = (e: any) => {
    setSeconds(e.target.value)
  }

  const Timer = () => {
    
    if (totalTime > 0) { 
      --totalTime

      var h = Math.floor((totalTime / 3600) % 60).toString()
      var m = Math.floor((totalTime / 60) % 60).toString()
      var s = (totalTime % 60).toString()

      if (h.length == 1) {
        h = "0" + h;
      }
      if (m.length == 1) {
        m = "0" + m;
      }
      if (s.length == 1) {
        s = "0" + s;
      }

      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }
  }

  const handleOnClickPlay = () => {
    var time = parseInt(seconds) + (parseInt(minutes) * 60) + (parseInt(hours) * 3600)
    setTotalTime(time)
    console.log('play')
    setInterval(Timer, 1000)
  }

  const handleOnClickPause = () => {
    console.log('pause')
  }

  const handleOnClickReset = () => {
    setHours('00')
    setMinutes('00')
    setSeconds('00')
    console.log('reset')
  }

  return (
    <div className="App">
      <div id='body' className='h-screen w-full flex flex-col items-center bg-zinc-900'>
        <header className='w-full h-16 flex items-center justify-center text-white text-4xl font-extralight tracking-widest bg-zinc-700'>
          <a href="/">- React Timer -</a>
        </header>

        <div id='timer' className='flex flex-col justify-center w-full p-4 text-7xl text-white bg-zinc-700 mt-7 rounded-xl'>
          <div className='flex justify-center items-center'>
            <input 
            id='hours' 
            value={hours} 
            maxLength={2} 
            type="text" 
            className='bg-transparent max-w-[100px] text-right px-1'
            onChange={handleOnChangeHours}/>
            :
            <input 
            id='minutes' 
            value={minutes}
            maxLength={2} 
            type="text" 
            className='bg-transparent max-w-[95px] text-center px-1'
            onChange={handleOnChangeMinutes}/>
            :
            <input 
            id='seconds' 
            value={seconds}
            maxLength={2} 
            type="text" 
            className='bg-transparent max-w-[100px] text-left px-1'
            onChange={handleOnChangeSeconds}/>
          </div>
        </div>

        <div id='buttons' className='flex justify-between mt-8 gap-10'>
          <button 
          id='play' 
          className='flex h-20 w-20 p-2 items-center justify-center bg-green-500 hover:bg-green-400 rounded-xl transition-colors'
          onClick={handleOnClickPlay}
          >
            < PlayIcon />
          </button>
          <button 
          id='play' 
          className='flex h-20 w-20 p-2 items-center justify-center bg-yellow-500 hover:bg-yellow-400 rounded-xl transition-colors'
          onClick={handleOnClickPause}
          >
            < PauseIcon />
          </button>
          <button 
          id='play' 
          className='flex h-20 w-20 p-2 items-center justify-center bg-red-500 hover:bg-red-400 rounded-xl transition-colors'
          onClick={handleOnClickReset}
          >
            < ResetIcon />
          </button>
        </div>

      </div>
    </div>
  )
}

export default App

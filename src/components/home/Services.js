import React from 'react'
import {FcStumbleupon} from 'react-icons/fc';
import {FcAssistant} from 'react-icons/fc';
import {FcBearish} from 'react-icons/fc';
import {FcAlarmClock} from 'react-icons/fc';

export default function Services() {
  const services = [
    {
      icon: <FcStumbleupon />,
      title: "Գեղեցիկ դիզայն"
    },
    {
      icon: <FcAlarmClock />,
      title: "Առողջ ապրելակերպ"
    },
    {
      icon: <FcBearish />,
      title: "Արագաշարժ կայք"
    },
    {
      icon: <FcAssistant />,
      title: "24/7"
    }
  ]
  return (
    <div className="container-md text-center">
      <h2 className="display-4 ma-bt-lg px-3 mx-auto">Ծառայություններ</h2>
      <div className="row text-center">
        {services.map((item, index) => {
          return(
            <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 col-12 my-5">
              <span style={{fontSize: "70px", color: "var(--mainGreen)"}}>{item.icon}</span>
              <h3>{item.title}</h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

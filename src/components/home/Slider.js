import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import image1 from './assets/chef-not-css.svg';

export default function Slider() {
  return (
    <Wrapper className="mx-5 mb-5">
      <div className="row d-flex justify-content-between flex-wrap-reverse">
        <div className="col-lg-6 col-md-6 d-none d-md-flex justify-content-start justify-content-center align-items-center mx-auto">
          <div>
            <p className="display-3 py-3 text--green">Բարի <br />գալուստ <br/> մեր խոհանոց</p>
            <Link to='/recipes' className="btn btn--green my-3">Տեսնել ավելին</Link>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-11 col-11 d-flex justify-content-center align-items-center mx-auto">
          <img src={image1} className="img-fluid" width="100%" height="500px" alt="Cook..." />
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media screen and (max-width: 1103px){
    .display-3{
      font-size: 40px !important;
    }
  }
`
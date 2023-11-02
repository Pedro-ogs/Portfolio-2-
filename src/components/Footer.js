import React from 'react';
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Footer(){
    return(
        <MDBFooter className='bg-light text-center text-white meuFooter'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          {/*<MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
    </MDBBtn>*/}

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://twitter.com/pedro_ogs'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          {/*<MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>*/}

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='https://github.com/Pedro-ogs'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#6a1b9a' , margin: 0}}>
        © 2023 Copyright
      </div>
    </MDBFooter>
    );
}

export default Footer;
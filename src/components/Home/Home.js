import React from 'react';
import Animation from './Animation';

const home = () => {
  return (
    <div>
      <div>
        <h1>Title</h1>
      </div>
      <div>
        <h3>Summary</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, ad a harum. Quia unde, laborum architecto fugiat amet odit, quisquam maiores iusto quo sed! Neque maiores fugit nemo, sequi earum?</p>
      </div>
      <div>
        <h5>Hobbies</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate itaque in sit, sed assumenda magnam odio asperiores aspernatur maiores consequuntur. Quo facere, vitae illo dicta porro assumenda dolorum ea fugit.</p>
      </div>
      <div>
        <Animation />
      </div>
    </div>
  );
}

export default home;
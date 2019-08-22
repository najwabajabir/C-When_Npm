const App = ({isLoggedIn}) => (
  <div>
    {(isLoggedIn)?(
      <div>Some secret content here</div>
    ):(null)}
  </div>
);
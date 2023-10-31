
import './A404Page.css';

export default function A404Page() 
{
  return (
    <div className="a-404-page">
      <form className="four-oh-four-form">
        <input type="text" className="404-input" />
      </form>

      <div className="terminal">
          <p className="prompt">404 Error! The page you requested cannot be found.</p>
          <p className="prompt output new-output"></p>
      </div>
    </div>
  );
}
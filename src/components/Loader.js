export const Loader = () => {
  return (
    <div className="loading">
      <div className="code-loader">
        <div className="loader-content">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-buttons">
                <span className="btn-close"></span>
                <span className="btn-minimize"></span>
                <span className="btn-maximize"></span>
              </div>
              <div className="terminal-title">zakaria@portfolio:~$</div>
            </div>
            
            <div className="terminal-body">
              <div className="code-lines">
                <div className="code-line">
                  <span className="prompt">$</span>
                  <span className="command">npm run build</span>
                </div>
                <div className="code-line delay-1">
                  <span className="output">Building portfolio...</span>
                </div>
                <div className="code-line delay-2">
                  <span className="output">✓ Compiling React components</span>
                </div>
                <div className="code-line delay-3">
                  <span className="output">✓ Processing AWS experience</span>
                </div>
                <div className="code-line delay-4">
                  <span className="output">✓ Loading ML projects</span>
                </div>
                <div className="code-line delay-5">
                  <span className="output">✓ Optimizing data science portfolio</span>
                </div>
                <div className="code-line delay-6">
                  <span className="success">Build completed successfully!</span>
                </div>
                <div className="code-line delay-7">
                  <span className="prompt">$</span>
                  <span className="command typing">Starting portfolio server</span>
                  <span className="cursor">|</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="loading-progress">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <div className="progress-text">
              <span className="loading-status">Initializing...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
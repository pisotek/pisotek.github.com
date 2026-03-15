import { useState } from 'react';
import { Lock } from 'lucide-react';

const SITE_PASSWORD = 'alessiobar';

export const PasswordGate = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('site_authenticated') === 'true';
  });
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Small delay for UX
    setTimeout(() => {
      if (password === SITE_PASSWORD) {
        sessionStorage.setItem('site_authenticated', 'true');
        setIsAuthenticated(true);
      } else {
        setError('Incorrect password');
        setPassword('');
      }
      setIsLoading(false);
    }, 500);
  };

  if (isAuthenticated) {
    return children;
  }

  return (
    <div 
      className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6"
      data-testid="password-gate"
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-3xl text-gold-gradient font-semibold mb-2">
            Alex Sterling
          </h1>
          <p className="text-[#666666] text-sm tracking-widest uppercase">
            Bartender Mixologist
          </p>
        </div>

        {/* Password Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="card-glass p-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                <Lock className="text-[#D4AF37]" size={28} />
              </div>
            </div>

            <p className="text-center text-[#A0A0A0] text-sm mb-6">
              This site is password protected.<br />
              Please enter the password to continue.
            </p>

            <div className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#333] text-[#EDEDED] text-center tracking-widest focus:border-[#D4AF37] focus:outline-none transition-colors"
                  data-testid="password-input"
                  autoFocus
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center" data-testid="password-error">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading || !password}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="password-submit"
              >
                {isLoading ? 'Verifying...' : 'Enter Site'}
              </button>
            </div>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-[#666666] text-xs mt-8">
          &copy; {new Date().getFullYear()} Alex Sterling. All rights reserved.
        </p>
      </div>
    </div>
  );
};

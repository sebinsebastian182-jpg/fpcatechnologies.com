import React from 'react';

function App() {
  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl shadow-2xl shadow-black/50">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20 font-['Space_Grotesk'] tracking-tight">
          <div className="text-2xl font-bold tracking-tighter text-white">FPCA</div>
          <div className="hidden md:flex gap-8">
            <a className="text-gray-400 hover:text-white transition-colors" href="#solution">Solution</a>
            <a className="text-gray-400 hover:text-white transition-colors" href="#benefits">Benefits</a>
            <a className="text-gray-400 hover:text-white transition-colors" href="#applications">Applications</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-gray-400 hover:text-[#b8c3ff] transition-all duration-300">Learn More</button>
            <button className="bg-primary-container text-on-primary-container px-6 py-2 font-medium scale-95 active:scale-90 transition-transform">Contact Us</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-sm mb-6">
              <span className="w-2 h-2 bg-tertiary rounded-full"></span>
              <span className="text-[0.6875rem] font-label uppercase tracking-[0.2em] text-on-surface-variant">The Kinetic Blueprint</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
              Flying Power <span className="text-primary-container">Cables</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-light">
              Accelerating adoption of off-highway electric vehicles with a new way of providing power. Tethering heavy machinery to the grid via autonomous flight.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-container text-on-primary-container px-8 py-4 text-lg font-semibold flex items-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(46,91,255,0.4)]">
                Explore Technology
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="border border-outline-variant hover:bg-surface-container-high px-8 py-4 text-lg font-semibold transition-colors">
                Watch Technical Demo
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-2xl relative group">
              <img alt="Industrial drone tether concept" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="High-tech industrial drone in mid-air connected by a glowing power cable to a heavy electric excavator in a quarry at twilight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfU0ZHO-g187GCEYNQDUWl5OtHjEFmRxmx3NHoeJ59E-Z3lVdMZSv7FE_zPnuDeT-0nnlE7fWYc6tNPSDC9qfzx595axzQXKXQNH9k7VDf2wmCLItpddeJpzLvocMR1KXtRj1xteHnxugtlq8xtHXJnva5Kst9_s4PcWB60aKYOyCMu-T6pzki8-A7-VrCcOrfUSbhlhvNsXevF21KNG2hQ0qaCyFcn5Y-c5jFXZJ68lhWkK6fPLLK53LMnztaJFKQw39UjmLUM6M" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card border-l-2 border-primary-container">
                <p className="font-label text-xs uppercase tracking-widest text-primary mb-1">Status: Operational</p>
                <p className="text-white font-medium">Continuous Grid Connection Achieved</p>
              </div>
            </div>
            {/* Abstract Geometric Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary-container/30 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-8">The Battery Bottleneck</h2>
              <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed">
                <p>Current industrial electrification faces a critical paradox: Heavy machinery requires immense power, yet massive batteries introduce "Charge Anxiety" and crippling weight.</p>
                <p>Relying on static charging stations leads to 30% downtime for industrial fleets, stalling productivity and inflating operational overhead.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 bg-surface-container-high flex flex-col justify-between aspect-square">
                <span className="material-symbols-outlined text-error text-4xl" data-icon="battery_alert">battery_alert</span>
                <div>
                  <p className="text-3xl font-headline font-bold text-white mb-2">30%</p>
                  <p className="text-sm font-label uppercase tracking-wider text-on-surface-variant">Fleet Downtime</p>
                </div>
              </div>
              <div className="p-8 bg-surface-container-high flex flex-col justify-between aspect-square translate-y-8">
                <span className="material-symbols-outlined text-error text-4xl" data-icon="trending_up">trending_up</span>
                <div>
                  <p className="text-3xl font-headline font-bold text-white mb-2">2x</p>
                  <p className="text-sm font-label uppercase tracking-wider text-on-surface-variant">Maintenance Cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-32 overflow-hidden" id="solution">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-headline text-5xl font-bold mb-6">Continuous Energy. <br /><span className="text-primary">Autonomous Tethering.</span></h2>
            <p className="text-xl text-on-surface-variant">We replace massive batteries with a dynamic, flying conduit that follows your fleet wherever the work is.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="group relative p-10 bg-surface-container-high overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-8xl font-headline font-black text-white/5 group-hover:text-primary/10 transition-colors">01</div>
              <span className="material-symbols-outlined text-primary text-5xl mb-8" data-icon="precision_manufacturing">precision_manufacturing</span>
              <h3 className="text-2xl font-bold mb-4">Autonomous Flight</h3>
              <p className="text-on-surface-variant">Precision drone flight controllers maintain perfect positioning, ensuring the cable never interferes with machine movement.</p>
            </div>
            {/* Step 2 */}
            <div className="group relative p-10 bg-surface-container-high overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-8xl font-headline font-black text-white/5 group-hover:text-primary/10 transition-colors">02</div>
              <span className="material-symbols-outlined text-primary text-5xl mb-8" data-icon="power">power</span>
              <h3 className="text-2xl font-bold mb-4">High-Tension Link</h3>
              <p className="text-on-surface-variant">Optimized power cables deliver grid-level voltage directly to the machine's motor, bypassing the need for storage.</p>
            </div>
            {/* Step 3 */}
            <div className="group relative p-10 bg-surface-container-high overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-8xl font-headline font-black text-white/5 group-hover:text-primary/10 transition-colors">03</div>
              <span className="material-symbols-outlined text-primary text-5xl mb-8" data-icon="sync">sync</span>
              <h3 className="text-2xl font-bold mb-4">Seamless Integration</h3>
              <p className="text-on-surface-variant">Compatible with existing electric excavator and tractor architectures, making the transition to FPCA effortless.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section (Kinetic Stats) */}
      <section className="py-24 bg-surface-container-low border-y border-outline-variant/10" id="benefits">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold text-tertiary">95%</div>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant leading-tight">Carbon <br />Reduction</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold text-primary">70%</div>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant leading-tight">Fuel Cost <br />Savings</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold text-primary">40%</div>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant leading-tight">Operating <br />Cost Cut</p>
            </div>
            <div className="space-y-4">
              <div className="text-5xl font-headline font-bold text-white">90%+</div>
              <p className="text-sm font-label uppercase tracking-widest text-on-surface-variant leading-tight">Total <br />Efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-32 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-headline text-4xl font-bold mb-12 text-center">Efficiency Engineering</h2>
          <div className="bg-surface-container-high p-1 rounded-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-highest">
                  <th className="p-6 font-label uppercase tracking-wider text-xs">Energy Technology</th>
                  <th className="p-6 font-label uppercase tracking-wider text-xs">Efficiency %</th>
                  <th className="p-6 font-label uppercase tracking-wider text-xs">Emissions</th>
                  <th className="p-6 font-label uppercase tracking-wider text-xs">Reliability</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20">
                <tr>
                  <td className="p-6 font-bold text-primary">FPCA Grid Link</td>
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 bg-surface-container-low rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-[95%]"></div>
                      </div>
                      <span>95%</span>
                    </div>
                  </td>
                  <td className="p-6 text-tertiary">Zero Local</td>
                  <td className="p-6">Max (Continuous)</td>
                </tr>
                <tr>
                  <td className="p-6 text-on-surface-variant">Battery Electric</td>
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 bg-surface-container-low rounded-full overflow-hidden">
                        <div className="h-full bg-on-surface-variant w-[80%]"></div>
                      </div>
                      <span>80%</span>
                    </div>
                  </td>
                  <td className="p-6">Zero Local</td>
                  <td className="p-6">Variable (Charging)</td>
                </tr>
                <tr>
                  <td className="p-6 text-on-surface-variant">Fossil Fuel (Diesel)</td>
                  <td className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-24 bg-surface-container-low rounded-full overflow-hidden">
                        <div className="h-full bg-error w-[35%]"></div>
                      </div>
                      <span>35%</span>
                    </div>
                  </td>
                  <td className="p-6 text-error">High Impact</td>
                  <td className="p-6">High (Refueling)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications Bento Grid */}
      <section className="py-32 bg-surface" id="applications">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-headline text-5xl font-bold mb-16">Universal <span className="text-primary-container">Utility</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Construction */}
            <div className="group relative h-[500px] overflow-hidden rounded-xl">
              <img alt="Construction application" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Massive electric excavator working in a modern urban construction site with futuristic glass buildings in the background at dawn" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYm-H2gI10V9dO_sEIvMpufRHeD7V27rm_ouMKJ7op6MoJLYul14VA1Cj3GYRJm60JFWsdqzwOkANtBOXIcFp0SCFwE-qwjOq4HB-QWBr_kDpQJdX6Yidts4AbL6Va-0Hj7XluTfLomI7SUgQIKiGhwjhxX8ujlro7yMFFRvbb_lIcMKWugsA5SHHfE-zP6RRIPd0OKgm0J0hJpob_KzWSUaRGSBYBwP1-9FWZ3BNKB2VKSIgOqCeWkC0GfWwmiWFh5ReXAWmBuZ4" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-[0.6rem] font-label uppercase tracking-widest text-primary mb-2 inline-block">Infrastructure</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-4">Construction</h3>
                <p className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">Eliminate diesel fumes in urban centers and power high-torque heavy excavators 24/7 without refueling stops.</p>
              </div>
            </div>
            {/* Mining */}
            <div className="group relative h-[500px] overflow-hidden rounded-xl">
              <img alt="Mining application" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Autonomous electric mining truck operating in a deep open-pit mine with dramatic high-contrast lighting from floodlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoUWf7HYr656HMvtuEtk6PEKoX49jpymCAkCPAr60pP4SL8YGvjzuocKuOlmfqaxBZJzAPjkcNhZ5kQcCh1PCniQN9pBGuzcKORzf8Fv_0i7pfw2LXCGrxoYFnFpkndVx8RZy9vDa2tX-Yw-e9Zhqq28SVn5fbRRRdRUg6iddCEFvXsR9ssD5CNmC4SzXLScCqzXi1VSMN40W8Kpmf79TeYcg1aW_gp0uywd-RnbGOMUCcjdSf5VIvL271izEnocFUYlVCS6m8lks" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-[0.6rem] font-label uppercase tracking-widest text-primary mb-2 inline-block">Extraction</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-4">Mining</h3>
                <p className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">Deep-pit operations benefit from reduced ventilation costs as electric machines generate zero heat and exhaust.</p>
              </div>
            </div>
            {/* Agriculture */}
            <div className="group relative h-[500px] overflow-hidden rounded-xl bg-surface-container-high">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1594398911514-18e49339241f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" data-alt="Futuristic autonomous electric tractor plowing a vast agricultural field under a clear blue sky at sunset" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGPZgM7kcntk7Wp_Slp1PSO4VXGnprtYdtuCua_5qqGqc1AWqcokr3_fWRYAAX0-l1H8P_usxaJT0c2Z_sGRwP2dUmiDaVcm26Uts_MwmIJ1BtXzpsArIO2qCsPDBK7HG6iACC2WH3bZPmr5B_FrC1CCuIj9sl2Y1A7xAVXXbd5if_GcxloO8j9-vaveGzC-1CRVN-U03vOxECGXg9BUsEOJWurXEp-CycSGe8NkppNLoNvCuSJER-mfSWJEVsgkXN2TBwUYIfPtk')"}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="text-[0.6rem] font-label uppercase tracking-widest text-primary mb-2 inline-block">Cultivation</span>
                <h3 className="text-3xl font-headline font-bold text-white mb-4">Agriculture</h3>
                <p className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">Power heavy tilling and harvesting equipment directly from renewable farm grids, slashing fuel dependency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-container/10"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-container to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-headline text-5xl md:text-6xl font-bold mb-8">Join the Sustainable Revolution</h2>
          <p className="text-xl text-on-surface-variant mb-12">Be at the forefront of the kinetic blueprint for a fossil-free industrial future.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-primary-container text-on-primary-container px-10 py-5 text-xl font-bold transition-all hover:scale-105">Get Started</button>
            <button className="border border-outline-variant hover:bg-surface-container-high px-10 py-5 text-xl font-bold transition-colors">Request a Quote</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 border-t border-[#2a2a2a] bg-[#131313] font-['Inter'] text-sm tracking-wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
          <div className="col-span-1 md:col-span-1">
            <div className="font-['Space_Grotesk'] text-xl font-bold text-white mb-4">FPCA</div>
            <p className="text-gray-500 leading-relaxed">Revolutionizing industrial power delivery through autonomous flight tethering technology.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="#">Solution</a></li>
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="#">Benefits</a></li>
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="#">Applications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="text-gray-500 hover:text-[#2E5BFF] transition-colors" href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <div className="flex gap-2">
              <input className="bg-surface-container-high border-none text-white focus:ring-1 focus:ring-primary-container w-full px-4 py-2" placeholder="Email" type="email" />
              <button className="bg-primary-container p-2 text-on-primary-container">
                <span className="material-symbols-outlined" data-icon="send">send</span>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-[#2a2a2a] text-center text-gray-500">
          © 2024 Flying Power Cables. Engineered for the Kinetic Blueprint.
        </div>
      </footer>
    </>
  );
}

export default App;

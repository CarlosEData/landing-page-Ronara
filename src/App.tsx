import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Metodo from './pages/Metodo';
import Consultoria from './pages/Consultoria';
import Mentoria from './pages/Mentoria';

function App() {
  useEffect(() => {
    const metaPixelId = 'YOUR_META_PIXEL_ID';
    const linkedInPartnerId = 'YOUR_LINKEDIN_PARTNER_ID';

    (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );

    if (window.fbq) {
      window.fbq('init', metaPixelId);
      window.fbq('track', 'PageView');
    }

    const linkedInScript = document.createElement('script');
    linkedInScript.type = 'text/javascript';
    linkedInScript.innerHTML = `
      _linkedin_partner_id = "${linkedInPartnerId}";
      window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
      window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    `;
    document.head.appendChild(linkedInScript);

    const linkedInTag = document.createElement('script');
    linkedInTag.type = 'text/javascript';
    linkedInTag.async = true;
    linkedInTag.src = 'https://snap.licdn.com/li.lms-analytics/insight.min.js';
    document.head.appendChild(linkedInTag);

    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=${linkedInPartnerId}&fmt=gif" />`;
    document.body.appendChild(noscript);
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/metodo" element={<Metodo />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/mentoria" element={<Mentoria />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

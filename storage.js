// MindTrack – shared storage
const MT = {
  KEY: 'mindtrack_entries',

  save(type) {
    const entries = MT.load();
    const now = new Date();
    entries.push({
      type,
      ts: now.getTime(),
      date: now.toISOString().slice(0,10),
      time: now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0')
    });
    localStorage.setItem(MT.KEY, JSON.stringify(entries));
    return entries;
  },

  load() {
    try { return JSON.parse(localStorage.getItem(MT.KEY) || '[]'); } catch { return []; }
  },

  today() {
    const d = new Date().toISOString().slice(0,10);
    return MT.load().filter(e => e.date === d);
  },

  lastDays(n) {
    const days = [];
    for (let i = n-1; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0,10);
      const entries = MT.load().filter(e => e.date === key);
      const label = ['V','H','K','Sze','Cs','P','Szo'][d.getDay()];
      days.push({ date: key, label, entries,
        good: entries.filter(e=>e.type==='good').length,
        bad:  entries.filter(e=>e.type==='bad').length,
        opt:  entries.filter(e=>e.type==='opt').length,
        pess: entries.filter(e=>e.type==='pess').length,
      });
    }
    return days;
  },

  streak() {
    const entries = MT.load();
    if (!entries.length) return 0;
    const dates = [...new Set(entries.map(e => e.date))].sort().reverse();
    let streak = 0;
    let check = new Date();
    for (const d of dates) {
      const expected = check.toISOString().slice(0,10);
      if (d === expected) { streak++; check.setDate(check.getDate()-1); }
      else if (d < expected) break;
    }
    return streak;
  },

  count(type, days = 7) {
    return MT.lastDays(days).reduce((s, d) => s + d[type], 0);
  }
};

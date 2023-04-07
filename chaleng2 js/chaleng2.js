function majorityElement(n) {
    const c = {};
    const majorityThreshold = Math.floor(n.length / 2);
    
    for (let i = 0; i < n.length; i++) {
      const nu = n[i];
      c[nu = (c[nu] || 0) + 1;
      if (c[nu] > majorityThreshold) {
        return n;
      }
    }
  }
  
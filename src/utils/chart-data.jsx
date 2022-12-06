export const visitors = {
  chart: {
    backgroundColor: '#FFF8EA',
    type: 'spline',
    height: '35%'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: ''
    },
    tickInterval: 100
  },
  series: [{
    name: 'Loyal',
    data: [250, 200, 150, 200, 250, 300, 350, 250, 200, 100, 300, 350]
  },
    {
      name: 'New',
      data: [150, 100, 50, 100, 150, 200, 250, 150, 100, 150, 200, 250]
    },
    {
      name: 'Unique',
      data: [350, 300, 250, 300, 350, 100, 350, 350, 300, 350, 100, 350]
    }],
  credits: {
    enabled: false
  }
}

export const revenue = {
  chart: {
    backgroundColor: '#FFF8EA',
    type: 'column',
    height: '35%'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  yAxis: {
    title: {
      text: ''
    },
    tickInterval: 1000
  },
  series: [
    {
      name: 'Online Sales',
      data: [1500, 1000, 500, 1000, 1500, 2000, 2500]
    },
    {
      name: 'Offline Sales',
      data: [3500, 3000, 2500, 3000, 3500, 1000, 3500]
    }],
  credits: {
    enabled: false
  }
}

export const satisfaction = {
  chart: {
    backgroundColor: '#FFF8EA',
    type: 'areaspline',
    height: '35%'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    labels: {
      enabled: false
    }
  },
  yAxis: {
    title: {
      text: ''
    },
    tickInterval: 1000,
    labels: {
      enabled: false
    }
  },
  series: [
    {
      name: 'Last Month',
      data: [1500, 1000, 500, 1000, 1500, 2000, 2500]
    },
    {
      name: 'This Month',
      data: [3500, 3000, 2500, 3000, 3500, 1000, 3500]
    }],
  credits: {
    enabled: false
  }
}

export const target_reality = {
  chart: {
    renderTo: 'container',
    backgroundColor: '#FFF8EA',
    type: 'column',
    options3d: {
      enabled: true,
      alpha: 15,
      beta: 15,
      depth: 50,
      viewDistance: 25
    },
    height: '35%'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  yAxis: {
    title: {
      text: ''
    },
    tickInterval: 1000
  },
  series: [
    {
      name: 'Online Sales',
      data: [1500, 1000, 500, 1000, 1500, 2000, 2500]
    },
    {
      name: 'Offline Sales',
      data: [3500, 3000, 2500, 3000, 3500, 1000, 3500]
    }],
  credits: {
    enabled: false
  }
}

export const sales_growth = {
  chart: {
    backgroundColor: '#FFF8EA',
    type: 'bar',
    height: '35%'
  },
  title: {
    text: null
  },
  xAxis: {
    categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
  },
  yAxis: {
    title: {
      text: ''
    },
    tickInterval: 1
  },
  plotOptions: {
    series: {
      stacking: 'normal'
    }
  },
  series: [
    {
      name: 'Online Sales',
      data: [4, 4, 6, 15, 12]

    },
    {
      name: 'Offline Sales',
      data: [5, 3, 12, 6, 11]
    }],
  credits: {
    enabled: false
  }
}

export const sales_growth_polar = {
  chart: {
    backgroundColor: '#FFF8EA',
    polar: true,
    height: '35%'
  },
  title: {
    text: null
  },
  pane: {
    startAngle: 0,
    endAngle: 360
  },
  xAxis: {
    tickInterval: 45,
    min: 0,
    max: 360,
    labels: {
      enabled: false
    }
  },
  yAxis: {
    min: 0,
    labels: {
      enabled: false
    }
  },
  plotOptions: {
    series: {
      pointStart: 0,
      pointInterval: 45
    },
    column: {
      pointPadding: 0,
      groupPadding: 0
    }
  },
  series: [{
    type: 'column',
    name: 'Column',
    data: [8, 7, 6, 5, 4, 3, 2, 1],
    pointPlacement: 'between'
  }, {
    type: 'line',
    name: 'Line',
    data: [1, 2, 3, 4, 5, 6, 7, 8]
  }, {
    type: 'area',
    name: 'Area',
    data: [1, 8, 2, 7, 3, 6, 4, 5]
  }],
  credits: {
    enabled: false
  }
}

const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 8;
      case 'thursday':
        return 6;
      case 'friday':
        return 6;
      case 'saturday':
        return 5;
      case 'sunday':
        return 10;
    };
  };
  
  const getActualSleepHours = () => {
    return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('saturday')+getSleepHours('sunday');
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      return 'You have the perfect amount of sleep';
    } else if (actualSleepHours > idealSleepHours) {
      return 'You are having more sleep than needed. You are '+(actualSleepHours - idealSleepHours) +' hours oversleeping.';
    } else if (actualSleepHours < idealSleepHours) {
      return 'You should get some rest. You have '+ Math.abs(actualSleepHours - idealSleepHours)+' hours pending for sleep.';
    };
  };
  
  
  console.log(calculateSleepDebt());
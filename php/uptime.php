<?php
  $log = array();

  $uptime = shell_exec("cut -d. -f1 /proc/uptime");
  
  $days = floor($uptime/60/60/24);
  $log['days'] = $days;
  
  $hours = $uptime/60/60%24;
  $log['hours'] = $hours;
  
  $mins = $uptime/60%60;
  $log['mins'] = $mins;
  
  $secs = $uptime%60;
  $log['secs'] = $secs;
  
  echo json_encode($log);
?>
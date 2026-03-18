def sum67(nums):
  total = 0
  ignore = False
  
  for n in nums:
    if n == 6:
      ignore = True
      continue
    
    if ignore:
      if n == 7:
        ignore = False
      continue
    
    total += n
    
  return total
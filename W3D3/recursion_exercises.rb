require 'byebug'

def range(min, max)
  return [] if min >= max
  
  arr = [min]
  arr += range(min + 1, max)
end

# p range(1, 5)

def exp(base, num)
  return 1 if num == 0
  return base if num == 1

  base * exp(base, num - 1)
end

# p exp(0, 0)
# p exp(0, 1)
# p exp(1, 0)
# p exp(1, 1)
# p exp(1, 2)
# p exp(2, 0)
# p exp(2, 1)
# p exp(2, 4)

def exp_2(base, num)
  return 1 if num == 0
  return base if num == 1



  if num.even?
    exp_2(base, num / 2) * exp_2(base, num / 2)
  else
    base * (exp_2(base, ((num - 1) / 2) * ((num - 1) / 2)))
  end
end

# p exp_2(0, 0)
# p exp_2(0, 1)
# p exp_2(1, 0)
# p exp_2(1, 1)
# p exp_2(1, 2)
# p exp_2(2, 0)
# p exp_2(2, 1)
# p exp_2(2, 4)

def deep_dup(arr)
  return [arr] if !arr[0].is_a?(Array)
  
  dup_arr = [arr[0]]
  dup_arr << deep_dup(arr[1..-1])
  dup_arr
end

# arr = [1, [2], [3, [4]]]
# p arr.object_id
# dup = deep_dup(arr)
# p dup 
# p dup.object_id

def fib(n)
  return [] if n == 0
  return [0] if n == 1
  return [0, 1] if n == 2

  fibs = fib(n - 1)
  fibs << fibs[-1] + fibs[-2]
  fibs
end

# p fib(0)
# p fib(1)
# p fib(2)
# p fib(5)

def bsearch(arr, target)
  mid = arr.length / 2
  return mid if arr[mid] == target
  return nil if arr.empty?


  if arr[mid] < target
    result = bsearch(arr[mid+1..-1], target)
    if !result.nil?
      result + 1 + mid 
    end
  else
    bsearch(arr[0...mid], target)
  end
end

# p bsearch([1, 2, 3], 1) # => 0
# p bsearch([2, 3, 4, 5], 3) # => 1
# p bsearch([2, 4, 6, 8, 10], 6) # => 2
# p bsearch([1, 3, 4, 5, 9], 5) # => 3
# p bsearch([1, 2, 3, 4, 5, 6], 6) # => 5
# p bsearch([1, 2, 3, 4, 5, 6], 0) # => nil
# p bsearch([1, 2, 3, 4, 5, 7], 6) # => nil

def merge_sort(arr)
  return arr if arr.length < 2

  mid = arr.length / 2
  left = arr[0...mid]
  right = arr[mid..-1]
  left_sort = merge_sort(left)
  right_sort = merge_sort(right)

  merge(left_sort, right_sort)
end

def merge(left, right)
  merged = []
  until left.empty? || right.empty?
    if left[0] < right[0]
      merged << left.shift
    else
      merged << right.shift
    end
  end

  merged + left + right
end

# p merge_sort([1, 5, 7, 3, 5, 10])

def subsets(arr)
  return [arr] if arr.empty?

  subs = subsets(arr[0...-1])
  subs + subs.map {|sub| sub + [arr.last]}
end

# p subsets([]) # => [[]]
# p subsets([1]) # => [[], [1]]
# p subsets([1, 2]) # => [[], [1], [2], [1, 2]]
# p subsets([1, 2, 3])
# => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

def permutations(arr)
end

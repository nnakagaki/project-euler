def count_rects(dim)
  count = 0

  max = dim.max

  max.times do |i|
    (max - i).times do |j|
      [i+1,j+1+i]
      add1 = (dim[0] - (i+1) + 1) * (dim[1] - (j+1+i) + 1)
      if i == j+i
        add2 = 0
      else
        add2 = (dim[0] - (j+1+i) + 1) * (dim[1] - (i+1) + 1)
      end

      if add1 < 0
        add1 = 0
      end

      if add2 < 0
        add2 = 0
      end

      count += add1 + add2
    end
  end

  count
end

def closest_rect(num)
  i = 1
  count = 1

  while count < num
    i += 1
    count = count_rects([i,i])
  end

  narrowest = 2*i

  best_diff = num
  best_area = 0

  narrowest.times do |i|
    narrowest.times do |j|
      area = (i+1) * (j+1)
      diff = (num - count_rects([i+1,j+1])).abs
      if diff < best_diff
        p best_area = area
        best_diff = diff
      end
    end
  end

  best_area
end

closest_rect(2000000)

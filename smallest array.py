def maxmin(A):
      maxi = A[0]
      secondsmax = A[0]
      mini = A[0]
      secondmini = A[0]
      for item in A:
   if item > maxi:
      maxi = item
   elif secondsmax!=maxi and secondsmax < item:
      secondsmax = item
   elif item < mini:
      mini = item
   elif secondmini != mini and secondmini > item:
      secondmini = item
      print("Largest element is ::>", maxi)
      print("Second Largest element is ::>", secondsmax)
      print("Smallest element is ::>", mini)
      print("Second Smallest element is ::>", secondmini)
# Driver Code
A=list()
n=int(input("Enter the size of the List ::"))
print("Enter the number ::")
for i in range(int(n)):
k=int(input(""))
A.append(int(k))
maxmin(A)

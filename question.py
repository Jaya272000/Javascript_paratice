# n=10
# for i in range(2,n+1):
#     for j in range(2,n+1):
#         if i%j==0:
#             break
#     if i==j:
#         print(i,end=",")


# check prime number

n=3
count=0
for i in range(2,n):
    if n%i==0:
        count=1
        break
if count==1:
    print(' no prime number')
else:
    print('prime')


a='jayajjasa'
count=0
for i in a:
    for j in i:
        if i==j:
            count+=1
print(count)

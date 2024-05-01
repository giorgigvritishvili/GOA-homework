def sum(a):
    sum=0
    for num in a:
        sum+=num
    print(sum)


arr=[1,2,3,4,5]

sum(arr)
 
 

def bigs(a):

    a.sort()
    print(a[-1])
bigs(arr)



def big(lst):
  for i in lst:
    lst.sort()
    print(lst[-1])


    break
  





#   import requests

# # This function will store your text in one of the training
# # buckets in your machine learning project
# def storeTraining(text, label):
#     key = "ab1d4450-04ad-11ef-8c10-81ef3d8842e751d14c0a-db3b-449d-86b2-f757f75b5aad"
#     url = "https://machinelearningforkids.co.uk/api/scratch/"+ key + "/train"

#     response = requests.post(url, json={ "data" : text, "label" : label })

#     if response.ok == False:
#         # if something went wrong, display the error
#         print (response.json())


# # CHANGE THIS to the text that you want to store
# training = "The text that you want to store"

# # CHANGE THIS to the training bucket to store it in
# label = "kaci"

# storeTraining(training, label)


      
  



    
    
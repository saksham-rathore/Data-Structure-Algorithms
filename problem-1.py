# score = 95

# if score >= 90:
#     grade = "A"

# elif score >= 80:
#     grade = "B"

# elif score >= 70:
#     grade = "C"

# elif score >= 60:
#     grade = "D"

# print(grade)


input = "jnflbsdnfdajcfhanufyas"

for cha in input:
    print(cha)
    if input.count(cha) == 3:
        print("cha is: ", cha)
        break

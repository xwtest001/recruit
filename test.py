# 上图乘法口诀表代码示例
# for i in range(1, 10):
#     for b in range(1, i+1):
#         print("%d * %d=" % (i, b), i*b, end="    ")
#     print("\n")
# years = int(input("请输入你的出生年份："))


# 函数示例
# def test(year):
#     """
#
#     :rtype: object
#     """
#     li = ["猴", "鸡", "狗", "猪", "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊"]
#
#     if year % 4 == 0:
#         print("你出生时是闰年")
#     else:
#         print("你出生时是平年")
#
#     num = year % 12
#     res = "你的属性是：%s" % li[num]
#     print(res)
#
#
# result = test(years)
# print(result)  # None


# def test(age, name, sex):
#     print("年龄：", age)
#     print("名字：", name)
#     print("性别：", sex)
#     return "函数返回值"
#
#
# test(sex="女", name="xl", age=12)  # 年龄： 12 名字： xl 性别： 女
# test(12, sex="男", name="xw")  # 年龄： 12 名字： xw 性别： 男


# 混合使用时形参顺序：位置参数，*args，默认值参数，**kwargs
# def function(number, *args, string, name="", **kwargs):
#     print(number, string, name)  # 1 first xw
#     print(args)  # ('test', 4, 5, 6, 7)
#     print(kwargs)  # {'a': 1, 'b': 2}
#
#
# function(1, "test", 4, 5, 6, 7, string="first", name="xw", a=1, b=2)


class Person():
    age = 12

    def __get_age(self):

        return self.age

    def set_age(self, age):
        return self.__get_age()


# p = Person()
# print(p.set_age(12))  # 12

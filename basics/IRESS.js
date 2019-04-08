/**
 * rules:
 * 1. duration < 5 * 60 then amount = 3 * duraiton
 * 2. duration >= 5 * 60 then amount = Math.ceil(duration / 60) * 150
 * 3. longest duration, amount = 0 but only for the smallest phone number
 */
const solution = (str) => {
    const items = formatInput(str);

    //apply the 3rd pricing rule
    //find the longest duartion with smallest number
    const {
        smallestNumber,
        longestDuration
    } = findSmallestNumberWithLongestDuraiton(items);

    // update the amount to 0 of the smallest number
    return items.map(item => {
        
        if (item.number.toString() === smallestNumber.toString() && item.duration === longestDuration) {
            return {
                ...item,
                amount: 0
            }
        }
        return {
            ...item,
            amount: calcAmount(item)
        }
    })
}

/**
 * @param string
 * @output array
 */
const formatInput = (str) => {
    const arr = str.split('\n');
    return arr.map(item => {
        const record = item.split(',');
        let duration = formatDuration(record[0]),
            number = formatNumber(record[1]);
        return {
            duration,
            number,
        }
    })
}

const formatNumber = (numberStr) => numberStr.replace(/-/g, '');

const formatDuration = (durationStr) => {
    const duration = durationStr.split(':');
    const hour = duration[0];
    const minute = duration[1];
    const seconds = duration[2];
    return parseInt(hour) * 60 * 60 + parseInt(minute) * 60 + parseInt(seconds);
}

const calcAmount = (item) => {
    const {
        duration
    } = item;
    if (duration < 5 * 60) return duration * 3;

    if (duration >= 5 * 60) return Math.ceil(duration / 60) * 150;
}

const findSmallestNumberWithLongestDuraiton = (items) => {
    const longestDuration = Math.max(...items.map(item => (item.duration)));
    const itemsWithLongestDuraiton = items.filter(item => item.duration === longestDuration);
    const smallestNumber = Math.min(...itemsWithLongestDuraiton.map(item => parseInt(item.number)))
    return {
        smallestNumber,
        longestDuration
    };
}


let str = '00:01:07,400-234-090\n00:01:08,400-234-090\n00:05:01,701-080-080\n00:05:01,601-080-080\n00:05:01,801-080-080\n00:05:00,400-234-090';
console.log(solution(str));